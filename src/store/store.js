import { writable } from 'svelte/store'
import Data from '../config/data.json'

export let MostPickedStore = writable(Data.mostpicked)
