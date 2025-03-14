declare module 'next-mdx-remote/rsc' {
  export interface MDXRemoteProps {
    source: string
    components?: React.ComponentProps<any>
  }

  export class MDXRemote extends React.Component<MDXRemoteProps> {}
}
