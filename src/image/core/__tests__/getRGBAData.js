import { Image } from 'test/common';
import binary from 'test/binary';

test('32 bit grey image', () => {
  const img = new Image(2, 1, [-2000, 3000], { kind: 'GREY', bitDepth: 32 });

  const data = img.getRGBAData();
  expect(Array.from(data)).toEqual([0, 0, 0, 255, 255, 255, 255, 255]);

  const img1 = new Image(3, 1, [-2000, 3000, 500], { kind: 'GREY', bitDepth: 32 });
  const data1 = img1.getRGBAData();
  expect(Array.from(data1)).toEqual([
    0, 0, 0, 255,
    255, 255, 255, 255,
    127, 127, 127, 255
  ]);
});

test('32 bit rgb image', () => {
  const img = new Image(2, 1, [
    1, 2, 3,
    3, 2, 1
  ], { alpha: false, bitDepth: 32 });

  const data = img.getRGBAData();
  expect(Array.from(data)).toEqual([
    0, 127, 255, 255,
    255, 127, 0, 255
  ]);
});

test('binary image', () => {
  const img = new Image({
    width: 3,
    height: 2,
    kind: 'BINARY',
    data: binary`
      100
      011
    `
  });

  const data = img.getRGBAData();
  expect(Array.from(data)).toEqual([
    255, 255, 255, 255,   0,   0,   0, 255,   0,   0,   0, 255,
    0,     0,   0, 255, 255, 255, 255, 255, 255, 255, 255, 255
  ]);
});