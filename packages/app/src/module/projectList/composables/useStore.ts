import {ref} from "vue";
import {createGlobalState} from "@vueuse/core";
import {Store} from "tauri-plugin-store-api";


export const useStore = createGlobalState(() => {
    const store = new Store('.projects.dat');
    const projects = ref<Record<string, Project>>({})

    const loadProjects = async () => {
        projects.value = await store.get<Record<string, Project>>('projects') || {};
    }

    const addProject = async (path: string) => {
        // base64
        const projectId = btoa(path);
        projects.value[projectId] = {
            id: projectId,
            path: path
        };

        await store.set('projects', projects.value)
    }

    const removeProject = async (projectId: string) => {
        delete projects.value[projectId];
        await store.delete('projects')
    }

    const clearProjects = async () => {
        await store.clear()
        projects.value = {}
    }

    const getProject = async (projectId: string) => {
        if (!projects.value[projectId]) {
            await loadProjects()
        }

        return projects.value[projectId]
    }

    // init
    loadProjects().then(r => console.log('projects loaded'));

    return {
        projects,
        addProject,
        removeProject,
        loadProjects,
        clearProjects,
        getProject
    }
})
