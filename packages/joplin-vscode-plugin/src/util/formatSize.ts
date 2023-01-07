/**
 * 格式化文件大小, 输出成带单位的字符串
 * @param size 文件大小
 * @param [pointLength=2] 精确到的小数点数。
 * @param [units=[ 'B', 'K', 'M', 'G', 'TB' ]] 单位数组。从字节，到千字节，一直往上指定。
 *    如果单位数组里面只指定了到了K(千字节)，同时文件大小大于M, 此方法的输出将还是显示成多少K.
 * @link https://www.hangge.com/blog/cache/detail_2283.html
 */
export function formatSize(
  size: number,
  pointLength: number = 2,
  units: string[] = ['B', 'K', 'M', 'G', 'TB'],
) {
  let unit: string | undefined
  while ((unit = units.shift()) && size > 1024) {
    size = size / 1024
  }
  return (unit === 'B' ? size : size.toFixed(pointLength)) + unit!
}
