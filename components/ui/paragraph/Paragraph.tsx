interface Props {
  children: string
  sx?: string
}

export const Paragraph = ({ children, sx = '' }: Props) => {
  return <p className={sx}>{children}</p>
}
