import React from "react";
import { Block, Card, ColGrid } from "@tremor/react";

export default function Cards() {
  return (
   <>
      <ColGrid numColsMd={ 2 } numColsLg={ 3 } gapX="gap-x-6" gapY="gap-y-6" marginTop="mt-6">
         <Card>
         { /* Placeholder to set height */ }
         <div className="h-28" />
         </Card>
         <Card>
            { /* Placeholder to set height */ }
            <div className="h-28" />
         </Card>
         <Card>
            { /* Placeholder to set height */ }
            <div className="h-28" />
         </Card>
      </ColGrid>

      {/* <Block marginTop="mt-6">
         <Card>
            <div className="h-80" />
         </Card>
      </Block> */}
   </>
      
  );
}