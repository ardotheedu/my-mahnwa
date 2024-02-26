import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main>
		<Image
				src="/background.svg"
				alt="Background"
				className={styles.backgroundImage}
				fill
			/>
      <div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.title}>
						<div>MyMahwa</div>
					</div>
					<div className={styles.subtitle}>
						<div>Cadastro</div>
					</div>
					<div className={styles.form}>
						<div className={styles.field}>
							<label className={styles.label}>Nome</label>
							<input className={styles.input} type="text" name="nome" placeholder="José da Silva" />
						</div>
					</div>
					<div className={styles.form}>
						<div className={styles.field}>
							<label className={styles.label}>Nome de usuario</label>
							<input className={styles.input} type="text" name="nome de usuario" placeholder="sung_o_neccromancer" />
						</div>
					</div>
					<div className={styles.form}>
						<div className={styles.field}>
							<label className={styles.label}>Email</label>
							<input className={styles.input} type="email" name="email" placeholder="seuemail@gmail.com" />
						</div>
					</div>
					<div className={styles.form}>
						<div className={styles.field}>
							<label className={styles.label}>Senha</label>
							<input className={styles.input} type="password" name="senha" placeholder="******" />
						</div>
					</div>
					<div className={styles.buttonContainer}>
						<div>
							<button className={styles.sendButton}>Registrar</button>
						</div>
					</div>
					<div className={styles.create}>
						Já tem uma conta? <a href="/login">Faça login</a>
					</div>
				</div>
			</div>
	  </div>
    </main>
  );
}
