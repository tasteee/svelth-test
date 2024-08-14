import memoize from 'just-memoize';

export const getRotation = memoize((percentageA = 50, percentageB = 0, percentageC = 50) => {
	const xRotation = (-Math.PI * percentageA) / 100;
	const yRotation = ((-Math.PI / 2) * percentageB) / 100;
	const zRotation = (Math.PI * percentageC) / 100;
	return [xRotation, yRotation, zRotation];
});
