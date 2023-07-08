const setSolution = (id, visibility) => {


    const element = document.getElementById(id);
    console.log(element);
    switch (visibility) {
        case "visible":
            element.classList.remove("hidden");
            break;
        case "hide":
            element.classList.add("hidden");
            break;
    }
}
