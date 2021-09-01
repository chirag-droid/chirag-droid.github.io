import Heading from "../Heading";
import Card from './Card';
import CardIcon from "./CardIcon";

export default function Language() {
  return (
    <section id='languages'>
      <Heading text='Languages I know'/>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly  lg:max-w-5xl mx-auto'>
        <Card>
          <CardIcon src='/languages/python.svg' />
        </Card>
        <Card>
          <CardIcon src='/languages/javascript.svg' />
        </Card>
        <Card>
          <CardIcon src='/languages/rust.svg' />
        </Card>
        <Card>
          <CardIcon src='/languages/java.svg' />
        </Card>
        <Card>
          <CardIcon src='/languages/kotlin.svg' />
        </Card>
      </div>
    </section>
  );
}