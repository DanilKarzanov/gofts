import { Observer } from "./Observer"
import { Subject } from "./Subject"

const main = () => {
    const subject = new Subject()
    const observer = new Observer(subject)


    subject.setData(80, 65, 30)
    subject.setData(100, 40, 7)

}

main()