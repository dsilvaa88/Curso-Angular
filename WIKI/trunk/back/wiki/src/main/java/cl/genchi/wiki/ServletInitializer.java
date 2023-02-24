package cl.genchi.wiki;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class ServletInitializer extends SpringBootServletInitializer {	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(WikiApplication.class);
		
	}

}
