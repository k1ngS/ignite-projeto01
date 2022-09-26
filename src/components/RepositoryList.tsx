import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import "../styles/repositories.scss";

interface Repository {
  id?: number;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/k1ngS/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <div>
        <h1>Lista de repositórios</h1>

        <ul>
          {repositories.map((repository) => {
            return (
              <RepositoryItem key={repository.id} repository={repository} />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
