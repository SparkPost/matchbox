/* eslint-disable @typescript-eslint/no-explicit-any */
// Taken from https://github.com/radix-ui/primitives/blob/main/packages/react/polymorphic/src/polymorphic.ts
// Documentation: https://www.radix-ui.com/docs/primitives/utilities/polymorphic
import * as React from 'react';

/* -------------------------------------------------------------------------------------------------
 * Utility types
 * -----------------------------------------------------------------------------------------------*/
type Merge<P1 = { [key: string]: any }, P2 = { [key: string]: any }> = Omit<P1, keyof P2> & P2;

/**
 * Infers the OwnProps if E is a ForwardRefExoticComponentWithAs
 */
type OwnProps<E> = E extends ForwardRefComponent<any, infer P> ? P : { [key: string]: any };

/**
 * Infers the JSX.IntrinsicElement if E is a ForwardRefExoticComponentWithAs
 */
type IntrinsicElement<E> = E extends ForwardRefComponent<infer I, any> ? I : never;

type ForwardRefExoticComponent<E, OwnProps> = React.ForwardRefExoticComponent<
  Merge<E extends React.ElementType ? React.ComponentPropsWithRef<E> : never, OwnProps & { as?: E }>
>;

/* -------------------------------------------------------------------------------------------------
 * ForwardRefComponent
 * -----------------------------------------------------------------------------------------------*/

interface ForwardRefComponent<
  IntrinsicElementString,
  OwnProps = { [key: string]: any },
  /**
   * Extends original type to ensure built in React types play nice
   * with polymorphic components still e.g. `React.ElementRef` etc.
   */
> extends ForwardRefExoticComponent<IntrinsicElementString, OwnProps> {
  /**
   * When `as` prop is passed, use this overload.
   * Merges original own props (without DOM props) and the inferred props
   * from `as` element with the own props taking precendence.
   *
   * We explicitly avoid `React.ElementType` and manually narrow the prop types
   * so that events are typed when using JSX.IntrinsicElements.
   */
  <As = IntrinsicElementString>(
    props: As extends ''
      ? { as: keyof JSX.IntrinsicElements }
      : As extends React.ComponentType<infer P>
      ? Merge<P, OwnProps & { as: As }>
      : As extends keyof JSX.IntrinsicElements
      ? Merge<JSX.IntrinsicElements[As], OwnProps & { as: As }>
      : never,
  ): React.ReactElement | null;
}

/**
 * Alignment Types
 */
type AlignX = 'center' | 'left' | 'right';
type AlignY = 'center' | 'top' | 'bottom';

type Breakpoints = 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type BreakpointsWithoutDefault = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type LinkActionProps = {
  to?: string | { [key: string]: any }; // object here to support react router: https://reactrouter.com/web/api/location
  disabled?: boolean;
  external?: boolean;
  /**
   * @deprecated Use `as` instead
   */
  component?: React.ElementType;
  /**
   * @deprecated Use `as` instead
   */
  Component?: React.ElementType;
};

export type {
  ForwardRefComponent,
  OwnProps,
  IntrinsicElement,
  Merge,
  AlignX,
  AlignY,
  Breakpoints,
  BreakpointsWithoutDefault,
  Headings,
  LinkActionProps,
};
