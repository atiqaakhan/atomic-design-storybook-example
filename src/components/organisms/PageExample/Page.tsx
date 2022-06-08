import React from "react";
import { Button } from '../../atoms/Button';
import { Card } from '../../molecules/Card';
import "./page.css";

export const Page: React.FC = () => (
  <article className="w-5/6">
    <h2 className='pt-8 ml-0'>Atomic Design and storybook example</h2>
    <p className='text-gray-700'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
      repellendus vitae, enim mollitia facilis quaerat id aperiam quibusdam
      perferendis incidunt, provident tempora magni! Aperiam unde vel nihil sunt
      quaerat. Iusto.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
      repellendus vitae, enim mollitia facilis quaerat id aperiam quibusdam
      perferendis incidunt, provident tempora magni! Aperiam unde vel nihil sunt
      quaerat. Iusto.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
      repellendus vitae, enim mollitia facilis quaerat id aperiam quibusdam
      perferendis incidunt, provident tempora magni! Aperiam unde vel nihil sunt
      quaerat. Iusto.
    </p>

    <div className='flex justify-between mt-6' style={{ columnGap: '2rem' }}>
      {/* @ts-ignore */}
      <Card rootClassName={"w-1/2"}>
        <h3 className='text-xl'>Card Example 1</h3>
        <p className='text-sm text-gray-700'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          repellendus vitae, enim mollitia facilis quaerat id aperiam quibusdam
          perferendis incidunt, provident tempora magni! Aperiam unde vel nihil sunt
          quaerat. Iusto.
        </p>
        <Button label='View More' size='large' primary />
      </Card>

      {/* @ts-ignore */}
      <Card rootClassName={"w-1/2"}>
        <h3 className='text-xl'>Card Example 2</h3>
        <p className='text-sm text-gray-700'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
        repellendus vitae, enim mollitia facilis quaerat id aperiam quibusdam
        perferendis incidunt, provident tempora magni! Aperiam unde vel nihil sunt
        quaerat. Iusto.
        </p>
        <Button label='View More' size='large' primary />
      </Card>
    </div>
  </article>
);
