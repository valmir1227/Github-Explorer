interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}


export function RepositoryItem(props: RepositoryItemProps) {
  if (!props.repository.description) {
    props.repository.description = "Este repositório ainda está sem descrição."
  }

  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}
