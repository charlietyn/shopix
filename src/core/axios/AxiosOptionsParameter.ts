import {MaybeRef} from "@vueuse/core"

export type AxiosOptionsParameter = {
  defaultEnabled?: MaybeRef<boolean>
  defaultValue?: any
  axiosOptionFetch?: any
  debounceMs?: number
}
