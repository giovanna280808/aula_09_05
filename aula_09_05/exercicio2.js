const livro = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    resumo: function() {
      return `Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}`;
    }
  };
  
  console.log(livro.resumo());