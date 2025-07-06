# 🎨 Contabiliza Brand Colors

Este documento apresenta as cores oficiais da marca Contabiliza, extraídas diretamente dos arquivos SVG da logo.

## 🔵 Cores Principais (Azuis)

| Cor | Hex | Uso | Exemplo |
|-----|-----|-----|---------|
| **Blue Primary** | `#3b82f6` | Cor principal da marca, backgrounds, botões primários | ![#3b82f6](https://via.placeholder.com/20x20/3b82f6/3b82f6) |
| **Blue Dark** | `#1d4ed8` | Hover states, gradientes, acentos | ![#1d4ed8](https://via.placeholder.com/20x20/1d4ed8/1d4ed8) |
| **Blue Darker** | `#1e40af` | Headers, elementos de destaque | ![#1e40af](https://via.placeholder.com/20x20/1e40af/1e40af) |
| **Blue Stroke** | `#2563eb` | Bordas, contornos | ![#2563eb](https://via.placeholder.com/20x20/2563eb/2563eb) |

## 🟡 Cores Secundárias (Amarelos)

| Cor | Hex | Uso | Exemplo |
|-----|-----|-----|---------|
| **Yellow Primary** | `#fbbf24` | Elementos financeiros, moedas, destaques | ![#fbbf24](https://via.placeholder.com/20x20/fbbf24/fbbf24) |
| **Yellow Dark** | `#f59e0b` | Hover states do amarelo, bordas | ![#f59e0b](https://via.placeholder.com/20x20/f59e0b/f59e0b) |

## 🟢 Cores de Sucesso (Verdes)

| Cor | Hex | Uso | Exemplo |
|-----|-----|-----|---------|
| **Green Primary** | `#10b981` | Status ativo, dias marcados no calendário | ![#10b981](https://via.placeholder.com/20x20/10b981/10b981) |
| **Green Light** | `#22c55e` | Botões de ação positiva | ![#22c55e](https://via.placeholder.com/20x20/22c55e/22c55e) |
| **Green Lighter** | `#4ade80` | Variações mais claras | ![#4ade80](https://via.placeholder.com/20x20/4ade80/4ade80) |

## ⚫ Cores Neutras (Cinzas)

| Cor | Hex | Uso | Exemplo |
|-----|-----|-----|---------|
| **Gray Primary** | `#64748b` | Elementos estruturais, anéis do calendário | ![#64748b](https://via.placeholder.com/20x20/64748b/64748b) |
| **Gray Light** | `#e5e7eb` | Bordas, elementos inativos | ![#e5e7eb](https://via.placeholder.com/20x20/e5e7eb/e5e7eb) |
| **Gray Medium** | `#6b7280` | Textos secundários | ![#6b7280](https://via.placeholder.com/20x20/6b7280/6b7280) |

## 🎨 Gradientes da Marca

### Gradiente Azul
```scss
background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
```

### Gradiente Amarelo
```scss
background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
```

## 🚀 Como Usar

### Variáveis SCSS Disponíveis

```scss
// Cores principais da marca
$brand-primary: #3b82f6;
$brand-secondary: #fbbf24;
$brand-success: #10b981;
$brand-accent: #1d4ed8;

// Cores específicas do Contabiliza
$contabiliza-blue-primary: #3b82f6;
$contabiliza-blue-dark: #1d4ed8;
$contabiliza-yellow-primary: #fbbf24;
$contabiliza-green-primary: #10b981;

// Gradientes
$contabiliza-gradient-blue: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
$contabiliza-gradient-yellow: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
```

### Exemplos de Uso

```scss
// Botão primário
.btn-primary {
  background-color: $brand-primary;
  &:hover {
    background-color: $contabiliza-blue-dark;
  }
}

// Elemento com gradiente
.hero-section {
  background: $contabiliza-gradient-blue;
}

// Status ativo
.status-active {
  color: $brand-success;
}
```

## 📱 Componentes Específicos

### Calendário
- **Header**: `$contabiliza-blue-darker` (#1e40af)
- **Dias Ativos**: `$contabiliza-green-primary` (#10b981)
- **Dias Inativos**: `$contabiliza-gray-light` (#e5e7eb)
- **Anéis**: `$contabiliza-gray-primary` (#64748b)

### Elementos Financeiros
- **Moedas/Dinheiro**: `$contabiliza-gradient-yellow`
- **Bordas**: `$contabiliza-yellow-dark` (#f59e0b)

### Status Indicators
- **Ativo**: `$contabiliza-green-primary` (#10b981)
- **Inativo**: `$contabiliza-gray-light` (#e5e7eb)
- **Pendente**: `$contabiliza-yellow-primary` (#fbbf24)

## 🎯 Diretrizes de Uso

1. **Cor Primária**: Use `$brand-primary` para elementos principais e CTAs
2. **Cor Secundária**: Use `$brand-secondary` para elementos financeiros e destaques
3. **Cor de Sucesso**: Use `$brand-success` para status positivos e confirmações
4. **Gradientes**: Use com moderação para criar hierarquia visual
5. **Contraste**: Sempre teste o contraste para acessibilidade

## 📄 Arquivos Relacionados

- `src/variables.scss` - Todas as variáveis do sistema de design
- `src/brand-colors-example.scss` - Exemplos práticos de uso
- `public/favicon/contabiliza.svg` - Logo principal
- `public/favicon/contabiliza.minimal.svg` - Logo simplificada
- `public/favicon/contabiliza.horizontal.svg` - Logo horizontal