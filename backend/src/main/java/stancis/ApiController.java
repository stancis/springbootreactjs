package stancis;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

  @RequestMapping("/api/users")
  public String[] getUsers() {
    return new String[] {"User1", "User2"};
  }
}