func mergeAlternately(word1 string, word2 string) string {
    n1, n2 := len(word1), len(word2)
    i, j := 0,0
    var result []byte
   
    for i < n1 || j < n2 {
        if i < n1 {
            result = append(result, word1[i])
            i++
        }
        if j < n2 {
            result = append(result, word2[j])
            j++
        }
    }

    return string(result);
}