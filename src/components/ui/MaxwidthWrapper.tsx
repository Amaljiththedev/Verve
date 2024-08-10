import { cn } from '@/lib/utils';
import {ReactNode} from 'react';

 // Use a classnames library or define your own utility function

const MaxwidthWrapper =({
  className,
  children,
}:{
  className?: string;
  children: ReactNode;
}
)=> {
  return (
    <div className={cn('h-full mx-auto w-full max-w-screen-xl px-2.5:px-20', className)}>
      {children}
    </div>
  );
};

export default MaxwidthWrapper;
