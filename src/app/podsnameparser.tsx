'use client';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react'

const PodsNameParser = () => {
   const [text, setText]=  useState("");
   const [pods, setPods]=  useState("");

   function extractPodNames() {
     const regex = /mowx-\w+-\w+/g;
     const matches = text.match(regex) || [""];
     setPods(matches.join("\n"));
   }

    return (
      <div className="grid w-full gap-2">
        <Textarea
          placeholder={`│     ├──□ mowx-8b989c4c9-rchbr  Pod         ✔ Running     67m     ready:3/3
│     ├──□ mowx-8b989c4c9-zjc8b  Pod         ✔ Running     67m     ready:3/3
│     ├──□ mowx-8b989c4c9-2jjft  Pod         ✔ Running     67m     ready:3/3
│     ├──□ mowx-8b989c4c9-4j5bj  Pod         ✔ Running     67m     ready:3/3
│     ├──□ mowx-8b989c4c9-7bmcb  Pod         ✔ Running     67m     ready:3/3
│     ├──□ mowx-8b989c4c9-g9xhh  Pod         ✔ Running     67m     ready:3/3`}
          value={text}
          className='h-96'
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button onClick={extractPodNames}>Extract Pod Info</Button>
        <Textarea 
            value={pods} 
            readOnly
            className='h-96'
        />
      </div>
    );
}

export default PodsNameParser