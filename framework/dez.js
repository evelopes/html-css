function PlayerMain() {
    // let nums = "12,56,56,12,13";
    // let list = nums.split(",");
    // console.log(list[0] + list[1])

    //Para debug
    console.error("My Debug Message");
    console.log(resolver(12, 56));

    function resolver(num1, num2) {
        if (num1 <= num2) {
            let x = 1;
            do {
                resultado = num1 * x;
                x++
            } while (resultado != num2)
            return x
        } else {

            let x = 1;
            do {
                resultado = num2 * x;
                x++
            } while (resultado != num1)
            return x
        }





    }
}

PlayerMain();