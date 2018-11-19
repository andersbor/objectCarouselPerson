interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
    pictureUrl: string;
}

let user1: IPerson = { firstName: "John", lastName: "Doe", age: 24, pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/John_Travolta_Deauville_2013_2.jpg/440px-John_Travolta_Deauville_2013_2.jpg" };
let user2: IPerson = { firstName: "Abraham", lastName: "Bently", age: 34, pictureUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTIwNjA4NjMzODg2NTc0MDky/abraham-lincoln-9382540-2-402.jpg" };
let user3: IPerson = { firstName: "Brent", lastName: "Craigh", age: 24, pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Rev._Dr._Brent_Hawkes.jpg/440px-Rev._Dr._Brent_Hawkes.jpg" };

let users: IPerson[] = [user1, user2, user3];

let index: number = 0;

let prevButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("prevButton");
let nextButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("nextButton");

showUser();
checkButtonState();

function showUser(): void {
    let div1: HTMLDivElement = <HTMLDivElement>document.getElementById("div1");
    div1.innerHTML = users[index].firstName;

    let div2: HTMLDivElement = <HTMLDivElement>document.getElementById("div2");
    div2.innerHTML = users[index].lastName;

    let div3: HTMLDivElement = <HTMLDivElement>document.getElementById("div3");
    div3.innerHTML = users[index].age.toString();

    let div4: HTMLDivElement = <HTMLDivElement>document.getElementById("div4");
    div4.innerHTML = "<img height='50%' width='50%' src='" + users[index].pictureUrl + "'/>";
}

prevButton.addEventListener("click", doPrevButton);

nextButton.addEventListener("click", () => {
    index++;
    showUser();
    checkButtonState();
});

function doPrevButton(): void {
    index--;
    showUser();
    checkButtonState();
}

function checkButtonState(): void {
    if (index === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (index === users.length - 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}