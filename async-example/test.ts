function resolveAfterXSeconds(X: number) {
    return new Promise<string>(resolve => {
        setTimeout(() => {
            resolve("resolved");
        }, X * 1000);
    });
}

async function asyncCall() {
    console.log("calling");
    const result = await resolveAfterXSeconds(2);
    console.log(result);
    // expected output: "resolved"
}

asyncCall();
