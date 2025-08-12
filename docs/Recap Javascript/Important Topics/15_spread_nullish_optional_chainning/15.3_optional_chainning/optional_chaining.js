const user = { profile: { email: "a@b.com" } };

console.log(user?.profile?.email); // 'a@b.com'
console.log(user?.address?.street); // undefined (does not throw)

const obj = {
    func: () => "hello",
};

//Using with Function Calls
console.log(obj.func?.()); // 'hello'
console.log(obj.noFunc?.()); // undefined (does not throw)

//Using with Arrays
const arr = [1, 2, 3];

console.log(arr?.[1]); // 2
console.log(arr?.[10]); // undefined

const response = {
    data: {
        user: {
            profile: 0,
        },
    },
};

const profile1 = response?.data?.user?.profile ?? "Profile is null";
console.log(profile1);
const profile2 = response?.data?.user?.profile || "Profile is null - or";
console.log(profile2);
const email = response?.data?.user?.profile?.email ?? "No email found";

console.log(email); // 'No email found'
