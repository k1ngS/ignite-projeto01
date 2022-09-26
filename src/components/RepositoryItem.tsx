interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    language?: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  const language = !!props.repository.language
    ? `Criado em ${props.repository.language}`
    : "Linguagem de Programação não reconhecida";

  return (
    <li>
      <strong>
        {props.repository.name} - {language}
      </strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}
