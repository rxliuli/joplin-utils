export class RandomUtil {
  static string(): string {
    return Date.now() + '' + Math.floor(Math.random() * 10_000)
  }
}
