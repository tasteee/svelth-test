import { Note } from 'tonal';
import memoize from 'just-memoize';
import sharpMidiNotes from '../consts/sharpMidiNotes.json';

globalThis.Note = Note;

const getOctavedNote = (note: string, octave: number = 3): string => {
	if (/\n/.test(note)) return note.replace(/\n/g, `${octave}`);
	return `${note}${octave}`;
};

const checkIfNoteIsSharp = (note: string): boolean => {
	const hasNumber = /\d/.test(note);
	const hasHash = /#/.test(note);
	if (hasHash) return true;

	const _note = hasNumber ? note : getOctavedNote(note);
	const midiNote = Note.midi(_note) as number;
	return sharpMidiNotes.includes(midiNote);
};

export const noteHelper = {
	checkIfNoteIsSharp
};
