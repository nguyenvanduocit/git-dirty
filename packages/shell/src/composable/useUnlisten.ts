import {onBeforeUnmount, onMounted} from "vue";

declare type UnListen = () => void

export const useUnListen = (fn: () => Promise<UnListen>) => {
    let unListen: UnListen | undefined
    onMounted(async () => {
        unListen = await fn()
    })

    onBeforeUnmount(() => {
        unListen?.()
        unListen = undefined
    })
}
