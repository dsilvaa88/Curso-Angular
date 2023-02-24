package cl.genchi.wiki;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class WikiApplication implements CommandLineRunner{
	@Autowired
	public BCryptPasswordEncoder passwordEncoder;
		
	public static void main(String[] args) {
		
		SpringApplication.run(WikiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		String texto = passwordEncoder.encode("12345");
		System.out.println(texto);
	}
}
