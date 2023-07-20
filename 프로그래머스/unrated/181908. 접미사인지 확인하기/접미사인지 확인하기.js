function solution(my_string, is_suffix) {
    const lastIndex = my_string.lastIndexOf(is_suffix);
    if (lastIndex < 0) return 0;
    return my_string.length - lastIndex === is_suffix.length ? 1 : 0;
}