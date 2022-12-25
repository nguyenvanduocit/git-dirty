#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use tauri_plugin_store::PluginBuilder;
use std::str;

mod file_api;
mod file_lib;
mod git_api;

fn main() {
    tauri::Builder::default()
        .plugin(PluginBuilder::default().build())
        .setup(move |app| {
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            file_api::file_exist,
            file_api::read_directory,
            git_api::is_dirty,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
