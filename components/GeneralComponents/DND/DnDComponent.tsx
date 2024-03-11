import React, { useState } from 'react';
import { SortableContext, arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';



interface SortableComponentProps {
    items: { id: string; content: React.ReactNode }[];
}


const DnDComponent = (props: any) => {
    return (
        <div>

        </div>
    )
}

export default DnDComponent
