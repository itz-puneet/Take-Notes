var date= new Date()
let year = date.getFullYear();
export default function Footer(){
    return(
        <div>
            copyright {year}
        </div>
    )
}