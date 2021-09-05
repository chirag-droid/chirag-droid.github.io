import Heading from "../Heading";
import Card from './Card';
import CardIcon from "./CardIcon";
import { faPython, faJs, faRust, faJava} from '@fortawesome/free-brands-svg-icons'

function Name({text}) {
  return (
    <span className="text-blue-500 text-2xl">{text}</span>
  );
}

function Description({text}) {
  return (
    <p className="text-gray-600">{text}</p>
  );
}

const languages = [
  {
    name: "Python",
    icon: faPython,
    description: "interpreted, high-level programming language. emphasizes code readability with its use of significant indentation",
  },
  {
    name: "Javascript",
    icon: faJs,
    description: "just-in-time compiled, multi-paradigm programming language. curly-bracket syntax, dynamic typing, prototype-based object-orientation",
  },
  {
    name: "Rust",
    icon: faRust,
    description: "designed for performance and safety. syntactically similar to C++, guarantee memory safety by using a borrow checker to validate references",
  },
  {
    name: "Java",
    icon: faJava,
    description: "class-based, object-oriented programming language. intended to let application developers write once, run anywhere",
  },
]

export default function Language() {
  return (
    <section id='languages' className='scroll'>
      <Heading text='Languages I know'/>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly  lg:max-w-5xl mx-auto'>
      {languages.map(({name, icon, description})=>
        <Card>
          <CardIcon icon={icon} />
          <Name text={name} />
          <Description text={description} />
        </Card>
      )}
    </div>
    </section>
  );
}