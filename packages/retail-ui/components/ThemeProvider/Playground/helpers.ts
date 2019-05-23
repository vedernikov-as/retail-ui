import React from 'react';

export const getComponentsFromPropsList = <T>(
  component: React.ReactElement<T>,
  propsList: T[],
): Array<React.ReactElement<T>> => {
  return propsList.reduce(
    (result: Array<React.ReactElement<T>>, props, index) => [
      ...result,
      React.cloneElement(component, { ...props, key: index }),
    ],
    [],
  );
};