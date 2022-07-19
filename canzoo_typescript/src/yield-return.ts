export function* gen(){
    let count = 5;
    let select = 0;
    while(count--) {
        console.log(`up select : ${select}`);
        select = yield `you select ${select}`
        console.log(`under select : ${select}`);
    }
}

export const random = (max: number, min: number = 0) => Math.round(Math.random() * (max-min)) + min 