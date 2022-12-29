#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use tauri::{Manager, RunEvent, WindowEvent};
use tauri_plugin_store::PluginBuilder;
use tokio::sync::mpsc;

mod file_api;
mod file_lib;
mod git_api;
mod project_api;
mod windows_api;

#[tokio::main]
async fn main() {
    tauri::Builder::default()
        .plugin(PluginBuilder::default().build())
        .setup(|app| {
            let main_window = app.get_window("main").unwrap();
            let splashscreen = app.get_window("splashscreen").unwrap();

            app.listen_global("main::loaded", move |event| {
                splashscreen.close().unwrap();
                main_window.show().unwrap();
            });

            app.listen_global("frontend::event", move |event| {
                let event_name = event.payload().unwrap();
                println!("Event: {}", event_name);
                match event_name.as_str() {
                    "quit" => {
                        std::process::exit(0);
                    }
                    _ => {}
                }
            });

            Ok(())
        })
        .enable_macos_default_menu(true)
        .invoke_handler(tauri::generate_handler![
            file_api::file_exist,
            file_api::read_directory,
            git_api::is_dirty,
        ])
        .on_window_event(move |event| match event.event() {
            WindowEvent::FileDrop(file_drop_event) => {
                println!("File dropped: {:?}", file_drop_event);
            }
            _ => {}
        })
        .build(tauri::generate_context!())
        .expect("Error building app")
        .run(|app_handle, event| match event {
            // clone app_handler
            RunEvent::Ready => {
                println!("App is ready, starting background tasks");
                let new_handler = app_handle.clone();
                tauri::async_runtime::spawn(async move {
                    loop {
                        new_handler.emit_all("core::event", "sending").unwrap();
                        std::thread::sleep(std::time::Duration::from_secs(5));
                    }
                });
            }
            RunEvent::ExitRequested { .. } => {
                println!("Exit requested");
            }
            _ => {}
        })
}
