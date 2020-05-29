export const prime = () => {
    const wheelPrime = (n) => {


        const p = [2, 3, 5]


        let sieve = Array(8 * (Math.floor(n / 30) - 1))

        let genPrime = Array(31).fill(false)
        genPrime[7] = 0
        genPrime[11] = 1
        genPrime[13] = 2
        genPrime[17] = 3
        genPrime[19] = 4
        genPrime[23] = 5
        genPrime[29] = 6
        genPrime[1] = -1

        const inc = [4, 2, 4, 2, 4, 6, 2, 6]

        let g = 0;

        for (let i = 7; i < n;) {
            sieve[g] = i
            i += inc[g % 8]
            g++

        }

        // related to fabio sieve
        for (let v = 0; v < sieve.length; v++) {
            let m = v;
            if (sieve[v]) {
                for (let x = sieve[v]; x * sieve[v] <= n; x += inc[(m - 1) % 8]) {
                    sieve[(genPrime[((x * sieve[v]) - (Math.floor(x * sieve[v] / 30) * 30))] + (8 * Math.floor(x * sieve[v] / 30)))] = false
                    m++
                }
            }

        }


        return sieve

    }





    // console.log(wheelPrime(300))

    let m0 = performance.now();
    wheelPrime(100000001);
    let m1 = performance.now();
    console.log("Call to wheelPrime() took " + (m1 - m0) + " milliseconds.")


    console.log(wheelPrime(300))

}

