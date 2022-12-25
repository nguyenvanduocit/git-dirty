import {useStore} from "../composables/useStore";
import { open } from '@tauri-apps/api/dialog';

export const addProject = async () => {
    const {addProject} = useStore()

    const selected = await open({
        multiple: true,
        directory: true,
    });

    if (Array.isArray(selected) && selected.length > 0) {

        selected.forEach((path) => {
            addProject(path)
        })
    }
}
