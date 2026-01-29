import * as React from "react";
import { cn } from "../../lib/utils";

const Tabs = React.forwardRef(
  ({ className, defaultValue, onValueChange, children, ...props }, ref) => {
    const [value, setValue] = React.useState(defaultValue);

    const handleValueChange = (newValue) => {
      setValue(newValue);
      if (onValueChange) onValueChange(newValue);
    };

    return (
      <div
        ref={ref}
        className={cn("w-full", className)}
        data-value={value}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              value,
              onValueChange: handleValueChange,
            });
          }
          return child;
        })}
      </div>
    );
  },
);
Tabs.displayName = "Tabs";

const TabsList = React.forwardRef(
  ({ className, value, onValueChange, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-neutral-100 p-1 text-neutral-500",
        className,
      )}
      {...props}
    >
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            selectedValue: value,
            onValueChange,
          });
        }
        return child;
      })}
    </div>
  ),
);
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef(
  ({ className, value, selectedValue, onValueChange, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        selectedValue === value
          ? "bg-white text-neutral-950 shadow-sm"
          : "data-[state=inactive]:text-neutral-500 hover:text-neutral-900",
        className,
      )}
      onClick={() => onValueChange && onValueChange(value)}
      type="button"
      {...props}
    />
  ),
);
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef(
  ({ className, value, onValueChange, ...props }, ref) => {
    // Use context or similar in real app, but here we can check parent state via prop drilling if we passed it,
    // but actually TabsContent usually sits outside TabsList.
    // My simple implementation above in Tabs map only works for direct children.
    // For simplicity in a single file without context, I need a context.
    // Let's rewrite with Context.
    return null;
  },
);
TabsContent.displayName = "TabsContent";

// Re-implementing with Context
const TabsContext = React.createContext({});

const TabsRoot = React.forwardRef(
  ({ className, defaultValue, onValueChange, children, ...props }, ref) => {
    const [value, setValue] = React.useState(defaultValue);

    const handleValueChange = (newValue) => {
      setValue(newValue);
      if (onValueChange) onValueChange(newValue);
    };

    return (
      <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
        <div ref={ref} className={cn("w-full", className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    );
  },
);
TabsRoot.displayName = "Tabs";

const TabsListRoot = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-neutral-100 p-1 text-neutral-500",
      className,
    )}
    {...props}
  />
));
TabsListRoot.displayName = "TabsList";

const TabsTriggerRoot = React.forwardRef(
  ({ className, value, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          context.value === value
            ? "bg-white text-neutral-950 shadow-sm"
            : "hover:bg-neutral-200/50 hover:text-neutral-900",
          className,
        )}
        onClick={() => context.onValueChange(value)}
        type="button"
        {...props}
      />
    );
  },
);
TabsTriggerRoot.displayName = "TabsTrigger";

const TabsContentRoot = React.forwardRef(
  ({ className, value, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    if (context.value !== value) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 animate-in fade-in-0 zoom-in-95",
          className,
        )}
        {...props}
      />
    );
  },
);
TabsContentRoot.displayName = "TabsContent";

export {
  TabsRoot as Tabs,
  TabsListRoot as TabsList,
  TabsTriggerRoot as TabsTrigger,
  TabsContentRoot as TabsContent,
};
