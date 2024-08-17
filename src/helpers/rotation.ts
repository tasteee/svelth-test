import memoize from 'just-memoize';

export const getRotation = memoize((percentageX = 50, percentageY = 0, percentageZ = 50) => {
	const x = Math.abs(percentageX) > 1 ? percentageX / 100 : percentageX;
	const y = Math.abs(percentageY) > 1 ? percentageY / 100 : percentageY;
	const z = Math.abs(percentageZ) > 1 ? percentageZ / 100 : percentageZ;

	const xRotation = -Math.PI * x;
	const yRotation = (-Math.PI / 2) * y;
	const zRotation = Math.PI * z;
	return [xRotation, yRotation, zRotation];
});
