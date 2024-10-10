import 'package:flutter/material.dart';
import '../widgets/header.dart';
import '../widgets/about_section.dart';
import '../widgets/services_section.dart';
import '../widgets/contact_section.dart';
import '../widgets/footer.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Directionality(
      textDirection: TextDirection.rtl,
      child: Scaffold(
        body: SingleChildScrollView(
          child: Column(
            children: const [
              Header(),
              AboutSection(),
              ServicesSection(),
              ContactSection(),
              Footer(),
            ],
          ),
        ),
      ),
    );
  }
}