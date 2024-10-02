<script>
function displayArray(array) {
    let n = array.length;
    for (let i = 0; i < n; ++i)
        document.write(array[i] + " ");
    document.write("<br>");
}

function shellSort(array) {
    let n = array.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = array[i];
            let j;
            for (j = i; j >= gap && array[j - gap] > temp; j -= gap)
                array[j] = array[j - gap];
            array[j] = temp;
        }
    }
    return array;
}

let userInput = prompt("Enter numbers separated by commas:").split(",").map(Number);
document.write("Array before sorting:<br>");
displayArray(userInput);

userInput = shellSort(userInput);
document.write("Array after sorting:<br>");
displayArray(userInput);
</script>
