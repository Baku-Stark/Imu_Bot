<div align="center">

# Imu Bot
💿 Update: `Discord Bot`

</div>

## 💿 | Processo de Instalação e Atualização do Node

A versão utilizada no projeto é a `nodejs 20.13.1` porquê o Discordjs só suporta versões acima da `nodejs 16.11.0`. Todo o processo é realizado em ambiente Linux, Ubuntu.

### **Instalando o nodejs**

```bash
sudo apt install nodejs
```

### (Se necessário) **Limpe o cache**
```bash
sudo npm cache clean -f
```

### **Instalar (globalmente) o módulo _n_**
```bash
sudo npm install -g n
```

### **Atualize para a versão estável do nodejs**
```bash
sudo n stable
```

```bash
hash -r
```

```bash
node --version
```

## 💿 | Discord JS
[Documentação](https://discordjs.guide/#before-you-begin)

### **Instalando o discordjs**
```bash
npm install discord.js
```

----

## {} | Jogadores

Parte para leitura importante dos jogadores

### JSON | Fichas

`JSON: v_0.2.0`

```json
{
    "id_user": "string<USER DISCORD ID>",
    "user": "string",
    "tags": ["string"],
    "persona": {
        "nome" : "string",
        "idade": "int",
        "sexo" : "string",
        "altura" : "float",
        "peso" : "float",
        "raça" : "string",
        "perfil" : {
            "poder" : "string",
            "tipo_poder" : "string",
            "desc" : "string",
            "nivel" : "string"
        },
        "image" : "string",
        "historia": {
                "background": "string",
                "eventos_importantes": [
                    {
                        "evento": "string",
                        "descricao": "string",
                        "data": "string"
                    }
                ]
            }
    }
}
```