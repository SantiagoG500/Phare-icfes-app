import { writable } from 'svelte/store';

export const isLoggedIn = writable(false);
export const user = writable({});
export const completedExams = writable(false);
