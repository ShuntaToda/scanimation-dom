function createTriangle(size, angle) {
  // 角度をラジアンに変換
  const radians = (angle * Math.PI) / 180;

  // タンジェントを計算（0度と90度の場合は特別に処理）
  const tan = angle === 0 ? 0 : (angle === 90 ? Infinity : Math.tan(radians));

  // 2次元配列を初期化
  const triangle = Array(size).fill().map(() => Array(size).fill(0));

  for (let y = 0; y < size; y++) {
    const width = Math.min(Math.round(y / tan), size);
    for (let x = 0; x < width; x++) {
      triangle[y][x] = 1;
    }
  }

  return triangle;
}








function createSector(size, angle, startAngle = 0) {
  // 角度をラジアンに変換
  const startRad = (startAngle * Math.PI) / 180;
  const endRad = ((startAngle + angle) * Math.PI) / 180;

  // 2次元配列を初期化
  const sector = Array(size).fill().map(() => Array(size).fill(0));

  const center = Math.floor(size / 2);
  const radius = center;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // 中心からの相対座標を計算
      const dx = x - center;
      const dy = center - y;  // y軸は上下反転

      // 点と中心の距離を計算
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance <= radius) {
        // 点の角度を計算（アークタンジェントを使用）
        let angle = Math.atan2(dy, dx);
        if (angle < 0) angle += 2 * Math.PI;  // 角度を0~2πの範囲に調整

        // 点が扇形の範囲内にあるかチェック
        if (angle >= startRad && angle <= endRad) {
          sector[y][x] = 1;
        }
      }
    }
  }

  return sector;
}