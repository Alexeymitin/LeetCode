/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern, s) {
  const words = s.split(' '); // разбиваем строку на слова
  if (pattern.length !== words.length) return false; // если длины не совпадают, сразу false

  const patternToWord = new Map(); // Map для связи буквы -> слово
  const wordToPattern = new Map(); // Map для связи слово -> буква

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    // Проверяем связь с Map для паттерна
    if (patternToWord.has(char)) {
      if (patternToWord.get(char) !== word) {
        return false; // если буква уже сопоставлена с другим словом
      }
    } else {
      patternToWord.set(char, word); // устанавливаем связь
    }

    // Проверяем связь с Map для слов
    if (wordToPattern.has(word)) {
      if (wordToPattern.get(word) !== char) {
        return false; // если слово уже сопоставлено с другой буквой
      }
    } else {
      wordToPattern.set(word, char); // устанавливаем связь
    }
  }

  return true;
}
