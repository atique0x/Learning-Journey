# Compiler Notes

## 1. Compiler Stages

A compiler generally works in **3 main stages**:

1. **Parsing**
2. **Type Checking**
3. **Code Generation / Transformation / Emit**

---

## 2. Parsing

Parsing involves analyzing the **code structure**:

### Lexical Analysis

- Splits code into **tokens** (keywords, identifiers, operators, etc.)
- Often handled by a **tokenizer**

### Abstract Syntax Tree (AST) Generation

- Tokens are transformed into an **AST**
- Represents the **hierarchical structure** of the program

### Syntax Error Detection

- Compiler detects **invalid syntax** in the code

---

## 3. Binding / Symbol Table

### Symbol Table Creation

- Keeps track of **variables, functions, classes, etc.**
- Forms a **symbol tree**

### Link with Syntax Tree

- **Symbol table entries** are linked to the **AST nodes**

---

## 4. Type Checking

- Detects **type errors** in the code (if any)
- Ensures **type correctness** before code generation

---

## 5. Transformation / Code Generation

- Converts **source AST** to **target language AST**  
  _(e.g., TypeScript AST → JavaScript AST)_

- **Emit phase** produces the **final code**:
  - JavaScript file (`.js`)
  - Optional **source maps** for debugging
  - **Declaration files** (`.d.ts`) for type sharing

---

## 6. Compiler Flow (TS Example)

### Type Removal

- Remove **TS-specific type information**
- Convert to **JS target version**
- Mapping `.ts → .js file`
- JS can be **mapped back to TS** for debugging

### Watch Mode (Optional)

- Observes **file changes**
- Re-runs: parsing → type checking → emit

### Step-by-Step Flow

```css
TS Code
   ↓
Lexical Analysis → split code into tokens
   ↓
Parsing → Abstract Syntax Tree (AST)
   ↓
Binding → Symbol Table
   ↓
Type Checking → ensure type correctness
   ↓
Transformation → TS AST → JS AST
   ↓
Emit → JS AST → JS file
   ↓
JS Code
```
