import { solvro } from "@solvro/config/eslint";
import { globalIgnores } from "eslint/config";

export default solvro([globalIgnores(["./src/generated/prisma*"])]);
