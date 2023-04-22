import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"

await import ("dayjs/locale/es-us.js")

function handleSubmit(event) {
    event.preventDefault();
    console.log("Hola mundo");
}

const $form =document.querySelector("form");
$form.addEventListener("submit", handleSubmit);


dayjs.locale("es-us")
dayjs.extend(relativeTime)

console.log(dayjs().format("YYYY-MM-DD"))


function humanize(date){
    const wrappedDate= dayjs(date)
    //Diferencia entre fechas
    const daysDiff= Math.abs(wrappedDate.diff(Date.now(),"days"));

    const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

    if(!isCurrentYear){
        return wrappedDate.format("MMMM DD, YYYY")
    }else if(daysDiff<=30){
        return wrappedDate.fromNow();
    }else{
        return wrappedDate.format("MMMM DD")
    }
}

console.log(humanize(Date.now()))
console.log(humanize(dayjs().subtract(5,"days")))
console.log(humanize(dayjs().subtract(60,"days")))
console.log(humanize(dayjs().subtract(500,"days")))
console.log(humanize(dayjs().subtract(30,"days")))
console.log(humanize(dayjs().subtract(300,"days")))

