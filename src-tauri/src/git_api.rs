use git2::{Error, ErrorCode, Repository, StatusOptions, SubmoduleIgnore};

#[tauri::command]
pub async fn is_dirty(dir: String) -> bool {
    let repo = Repository::open(&dir).expect("Failed to open repository");
    if repo.is_bare() {
        return false
    }
    let mut opts = StatusOptions::new();
    let statuses = repo.statuses(Some(&mut opts)).expect("Failed to get statuses");

    let isDirty = statuses.iter().any(|s| {
        s.status() != git2::Status::CURRENT
            && s.status() != git2::Status::IGNORED
            && s.status() != git2::Status::WT_NEW
    });

    return isDirty
}
